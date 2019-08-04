; (function (Vue) {
	const todos = [
		{
			id: 1,
			title: '吃饭',
			completed: false
		}, {
			id: 2,
			title: '睡觉',
			completed: true
		}, {
			id: 3,
			title: '打豆豆',
			completed: true
		}
	]


	new Vue({
		el: '#todoapp',
		data: {
			todos
		},
		methods: {
			addTodo (event) {
				var todoText = event.target.value.trim();
				if (!todoText.length) {
					return
				}

				var id = this.todos[this.todos.length - 1].id + 1

				this.todos.push({
					id: id,
					title: todoText,
					completed: false
				})

				event.target.value = ''
			},

			toggleAll (event) {
				var checked = event.target.checked

				this.todos.forEach(todo => todo.completed = checked)
			}
		}
	})
})(Vue)