;(function(Vue) {
	const todos = [
		{
			id: 1,
			title: '吃饭',
			completed: false
		},{
			id: 2,
			title: '睡觉',
			completed: true
		},{
			id: 3,
			title: '打豆豆',
			completed: true
		}
	]


	new Vue({
		el: '#todoapp',
		data: {
			todos
		}
	})
})(Vue)