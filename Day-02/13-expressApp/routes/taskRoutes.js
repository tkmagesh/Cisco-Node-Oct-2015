var express = require('express');
var router = express.Router();

var tasks = [
    {id : 1, name : 'Watch a movie', isCompleted : true},
    {id : 2, name : 'Explore Bangalore', isCompleted : false}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tasks/index', { data : tasks });
});

router.get('/new', function(req, res, next){
    res.render('tasks/new');
});

router.post('/new', function(req, res, next){
    var newTaskName = req.body.newTaskName;
    var newId = tasks.reduce(function(result, task){
        return result > task.id ? result : task.id;
    },0) + 1;
    var newTask = {
        id : newId,
        name : newTaskName,
        isCompleted : false
    };
    tasks.push(newTask);
    res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
    var taskId = parseInt(req.params.id, 10);
    var task = tasks.filter(function(t){
        return t.id === taskId;
    })[0];
    if (task)
        task.isCompleted = !task.isCompleted;
    res.redirect('/tasks');
});

module.exports = router;
