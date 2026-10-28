'use client';
import { newTask } from "@/lib/actions";
import { Input, Label, TextField,Select,ListBox,Button, Form, FieldError} from "@heroui/react";
import React from "react";


function NewTask() {
  return (
    <div className ='w-1/2 mx-auto'>
      <h2 className="text-2xl font-bold mb-4">New Task</h2>
      <div>
        <Form action={newTask} className="flex flex-col gap-4">
          <TextField
          isRequired
          minLength={5}
          validate={(value)=> {
            if(value.length < 5){
              return 'Title must be at least 5 characters long';
            }
          }}
            className="w-full"
            name="title"
            type="title"
            variant="secondary"
          >
            <Label>Title</Label>
            <Input placeholder="Enter task title" />
            <FieldError></FieldError>
          </TextField>
          <TextField
            className="w-full"
            name="description"
            type="text"
            variant="secondary"
          >
            <Label>Description</Label>
            <Input placeholder="Enter task description" />
          </TextField>
          <Select
            name="priority"
            className="w-[256px]"
            placeholder="Select one"
          >
            <Label>Priority</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="low" textValue="low">
                  Low
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="medium" textValue="medium">
                  Medium
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="high" textValue="high">
                  High
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <Select name="status" className="w-[256px]" placeholder="Select one">
            <Label>Status</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="pending" textValue="pending">
                  Pending
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="in-progress" textValue="in-progress">
                  In Progress
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="completed" textValue="completed">
                  Completed
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <TextField className="w-full" name="Assignee" variant="secondary">
            <Label>Assign to</Label>
            <Input placeholder="Assign to..." />
          </TextField>
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button slot="close" type="submit">
              Submit Task
            </Button>
        </Form>
      </div>
    </div>
  );
}

export default NewTask;
