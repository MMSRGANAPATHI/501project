// const { describe, default: test } = require('node:test');
const todoList = require('../todo')

const { all, markAsComplete, add } = todoList();

describe("TodoLiat test suite", () => {
    beforeAll(()=>{
        add(
            {
                title: "Test Todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        )
    })
    test("Should add a Todo", () => {
        const todoItemcount = all.length;
        add(
            {
                title: "Test Todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        )
        expect(all.length).toBe(todoItemcount+1);
    })
    test("should mark as a tod as complete",()=>{
        expect(all[0].completed).toBe(false)
        markAsComplete(0)
        expect(all[0].completed).toBe(true);
    })
})