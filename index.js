const todoList = () => {
    const all = [];

    const add = (todoItem) => {
        all.push(todoItem);
    };

    const markAsComplete = (index) => {
        all[index].completed = true;
    };

    const overdue = () => {
        return all.filter((item) => {
            const dueDate = new Date(item.dueDate);
            const currentDate = new Date();
            return !item.completed && dueDate < currentDate;
        });
    };

    const dueToday = () => {
        return all.filter((item) => {
            const dueDate = new Date(item.dueDate);
            console.log(dueDate)
            const currentDate = new Date();
            return !item.completed && dueDate.toISOString().split("T")[0] === currentDate.toISOString().split("T")[0];
        });
    };

    const dueLater = () => {
        return all.filter((item) => {
            const dueDate = new Date(item.dueDate);
            const currentDate = new Date();
            return !item.completed && dueDate > currentDate;
        });
    };

    const toDisplayableList = (items) => {
        return items.map((item) => {
            return {
                title: item.title,
                dueDate: item.dueDate,
                completed: item.completed ? "Completed" : "Not Completed",
            };
        });
    };

    return {
        all,
        add,
        markAsComplete,
        overdue,
        dueToday,
        dueLater,
        toDisplayableList,
    };
};

module.exports = todoList
const todos = todoList();

const formattedDate = d =>{
    return d.toISOString().split("T")[0]
}
const dateToday = new Date()
const today = formattedDate(dateToday)
const Yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate()-1))
)
const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate()+1))

)
todos.add({title:"Submit assignment",dueDate:Yesterday,completed:false})
todos.add({title:"Pay rent",dueDate:today,completed:true})
todos.add({title:"Service Vehicle",dueDate:today,completed:false})
todos.add({title:"File Taxes",dueDate:tomorrow,completed:false})
todos.add({title:"Pay electric bill",dueDate:tomorrow,completed:false})

console.log("My todo-List")
console.log("overdue")

var overdues = todos.overdue()
var fromattedOverdues = todos.toDisplayableList(overdues)
console.log(fromattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")
console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedDueLater)
console.log("\n\n")
