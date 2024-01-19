/* eslint-disable no-undef */
// const { describe, default: test } = require('node:test');
const { describe } = require('node:test');
const todoList = require('../index')

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("TodoLiat test suite", () => {
    beforeAll(() => {
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
        expect(all.length).toBe(todoItemcount + 1);
    })
    test("should mark as a tod as complete", () => {
        expect(all[0].completed).toBe(false)
        markAsComplete(0)
        expect(all[0].completed).toBe(true);
    })

})
describe("todoList retrieval test suite", () => {
    beforeAll(() => {
        add({
            title: "Finish Project",
            completed: false,
            dueDate: new Date("11-08-23")
        })
        add({
            title: "Test 21",
            completed: false,
            dueDate: new Date(),
        });
        add({
            title: "Test 22",
            completed: true,
            dueDate: new Date(),
        });
        add({
            title: "Test 31",
            completed: false,
            dueDate: new Date("11-08-24"),
        });
        add({
            title: "Test 32",
            completed: true,
            dueDate: new Date("11-08-24"),
        });
    })
    test("Test retrieval of overdue items", () => {
        const length = overdue().length;
        console.log(overdue())
        expect(length).toBe(3);
    })

    test("test retrieval of due today items",()=>{
        console.log(dueToday());
        expect(dueToday().length).toBe(2);
    })
    test("test for due later items",()=>{
        console.log(dueLater());
        expect(dueLater().length).toBe(1)
    })
})