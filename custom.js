function myfun() {
    // window.location.href = 'http://127.0.0.1:3000/demo/newfile'
    console.log('sdf')
    window.history.pushState('', 'New Page Title', '/new-url.php');
	console.log(window.location.pathname)
  }