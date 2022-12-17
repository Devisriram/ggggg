/* eslint-disable no-undef */

const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

const formattedDate = (dt) => {
  return dt.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);

const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);

const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

const todoItemsCount = all.length;
const toDisplayableList = () => {
  describe("TodoList Test Suite", () => {
    test("checking for todo lists ", () => {
      expect(all.length).toBe(0);
    });
    /*beforeAll(() => {
      add({
        title: "Test todo",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      });
  });  
  test("checkging for the todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  }); */

    test("should add new todos ", () => {
      add(
        { title: "Task 1", dueDate: today, completed: true },
        { title: "English home Work", dueDate: yesterday, completed: true },
        { title: "Pay Fee", dueDate: tomorrow, completed: true },
        { title: "Tak 3", dueDate: today, completed: false },
        { title: "Send Msg ", dueDate: tomorrow, completed: true },
        { title: "hostel Fee due", dueDate: today, completed: false }
      );
      expect(all.length).toBe(todoItemsCount + 1);
    });

    test("test to check the overduetime", () => {
      for (var i = 0; i < all.length; i++) {
        if (all[i].dueDate == yesterday) {
          expect(all[i].dueDate).toBe(yesterday);
        }
      }
    });

    test("test to check the today due time", () => {
      for (var i = 0; i < all.length; i++) {
        if (all[i].dueDate == today && all[i].completed == false) {
          expect(all[i].dueDate).toBe(today);
          expect(all[i].completed).toBe(false);
        }
      }
    });

    test("test to check the next days time", () => {
      for (var i = 0; i < all.length; i++) {
        if (all[i].dueDate == tomorrow) {
          expect(all[i].dueDate).toBe(tomorrow);
        }
      }
    });

    test("should mark a todo as complete", () => {
      for (var i = 0; i < all.length; i++) {
        if (all[i].completed == false) {
          expect(all[0].completed).toBe(false);
          markAsComplete(0);
          expect(all[0].completed).toBe(true);
        }
        expect(all[0].completed).toBe(true);
      }
    });
  });
};

toDisplayableList();
