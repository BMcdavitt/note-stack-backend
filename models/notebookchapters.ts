import { Model, DataTypes, BuildOptions } from 'sequelize'
import { sequelize } from './index'

export interface INotebookChapter extends Model {
  id: number
  title: string
  notes: string
  notebookId: number
  parentNotebookChapterId: number
}

export type IModelStatic<T> = typeof Model & {
  associate(): void
  new (values?: object, options?: BuildOptions): T
}

export const notebookChapterTableName = 'NotebookChapters'

export const NotebookChapters = <IModelStatic<INotebookChapter>>sequelize.define(notebookChapterTableName, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  notes: {
    type: DataTypes.STRING,
  },
  notebookId: {
    type: DataTypes.INTEGER,
  },
  parentNotebookChapterId: {
    type: DataTypes.INTEGER,
  },

  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
})
