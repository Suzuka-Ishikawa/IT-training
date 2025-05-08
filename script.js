// ページが完全に読み込まれてからJSを実行
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const treeLeft = document.getElementById('tree-left');
    const treeRight = document.getElementById('tree-right');
    const squirrel = document.getElementById('squirrel');
    const owl = document.getElementById('owl');
    const container = document.querySelector('.container');

 // アニメーションの実行
    function startAnimation() {
        // 木を動かす（左右に移動）
        treeLeft.style.transform = 'translateX(-100%)';
        treeRight.style.transform = 'translateX(100%)';

        // ToDoリストを表示
        container.style.opacity = 1;
        container.style.transform = 'translateY(0)';

        // 動物を表示
        squirrel.style.opacity = 1;
        owl.style.opacity = 1;
    }

    // 初期状態の設定
    treeLeft.style.transition = 'transform 2s ease-in-out';
    treeRight.style.transition = 'transform 2s ease-in-out';
    container.style.opacity = 0;
    container.style.transform = 'translateY(50px)';
    container.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';

    // ページのロード後、少し遅れてアニメーション開始
    setTimeout(startAnimation, 800);

    // ローカルストレージからタスクを読み込む関数（tasksというキーで保存されているタスクのJSON文字列を読み込む）
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            JSON.parse(storedTasks).forEach(task => {
                addTaskToDOM(task.text, task.completed);
            });
        }
    }

    // タスクをローカルストレージに保存する関数（タスクごとのテキスト＆完了状態を取得し、オブジェクト配列のJSON文字列として保存）
    function saveTasks() {
        const tasks = Array.from(taskList.querySelectorAll('li')).map(li => ({
            text: li.querySelector('.task-text').textContent,
            completed: li.classList.contains('completed')
        }));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // タスクをDOMに追加する関数（新規タスクの追加・完了状態の反映など）
    function addTaskToDOM(taskText, completed = false) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task-text ${completed ? 'completed' : ''}">${taskText}</span>
            <button class="complete-btn">${completed ? '未完了' : '完了'}</button>
            <button class="delete-btn">削除</button>
        `;
        taskList.appendChild(listItem);
        saveTasks(); // タスクを追加したら保存
    }

    // タスク追加ボタンのイベントリスナー（ボタンに反応して入力欄を確認、入力があればaddTaskToDOM()を呼び出して新しいタスクとして追加）
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTaskToDOM(taskText);
            taskInput.value = ''; // 入力欄をクリア
        }
    });

    // Enterキーでもタスク追加を可能に（タスク追加ボタンをクリックしたときと同じ処理を実行）
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    // タスクリストのイベントリスナー（完了・削除ボタンの処理）
    taskList.addEventListener('click', (event) => {
        const target = event.target;
        const listItem = target.parentNode;
        const taskTextSpan = listItem.querySelector('.task-text');

        if (target.classList.contains('complete-btn')) {
            taskTextSpan.classList.toggle('completed');
            target.textContent = taskTextSpan.classList.contains('completed') ? '未完了' : '完了';
            saveTasks(); // 完了状態を保存
        } else if (target.classList.contains('delete-btn')) {
            taskList.removeChild(listItem);
            saveTasks(); // タスクを削除したら保存
        }
    });

    // ページのロード時にタスクを読み込む
    loadTasks();
});
