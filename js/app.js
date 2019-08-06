; ((Vue) => {
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


	window.app = new Vue({
		el: '#todoapp',
		data: {
			todos,
			currentEnditing: null
			//实现不了，this指向window
			//leftCount: this.todos.filter(item => !item.completed).length
		},
		computed: {
			leftCount () {
				return this.todos.filter(item => !item.completed).length
			}
		},
		methods: {
			addTodo(event) {
				var todoText = event.target.value.trim();
				if (!todoText.length) {
					return
				}

				var id = 0

				if (this.todos.length > 0) {
					id = this.todos[this.todos.length - 1].id + 1
				}

				this.todos.push({
					id: id,
					title: todoText,
					completed: false
				})

				event.target.value = ''
			},

			toggleAll(event) {
				var checked = event.target.checked

				this.todos.forEach(todo => todo.completed = checked)
			},

			removeTodo(delIndex, event) {
				this.todos.splice(delIndex, 1)
			},

			removeAllDone() {
				//过滤得到需要的数据，重新赋值todos
				this.todos = this.todos.filter(item => !item.completed)

				// for(let i = 0; i < this.todos.length; i++) {
				// 	if(this.todos[i].completed) {
				// 		this.todos.splice(i,1)
				// 		i--
				// 	}
				// }
			},

			// getLeftCount () {
			// 	return this.todos.filter(item => !item.completed).length
			// },

			getEditing (event) {

			}
		}
	})
})(Vue)