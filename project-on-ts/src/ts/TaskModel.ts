import { v4 as uuidv4 } from 'uuid';

export class TaskModel {
    // Конструктор с автоматическим созданием свойств через public
    constructor(
        public text: string,     // Текст задачи
        public checked: boolean = false, // Состояние выполнения
        public id: string = uuidv4()        // Уникальный идентификатор
    ) {};
}
// export class TaskModel {
//   content: string;
//   checkMarkStatus: boolean;
//   taskId: string;

//   constructor(content: string) {
//     this.content = content;
//     this.checkMarkStatus = false;
//     this.taskId = uuidv4();
//   }
// }

