// ページが完全に読み込まれてからJSを実行
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

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

    // Enterキーでのタスク追加
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
