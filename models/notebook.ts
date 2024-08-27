import { Model, DataTypes, BuildOptions } from 'sequelize'
import { sequelize } from './index'

export interface INotebook extends Model {
  id: number
  title: string
  description: string
}

export type IModelStatic<T> = typeof Model & {
  associate(): void
  new (values?: object, options?: BuildOptions): T
}

export const notebookTableName = 'Notebooks'

export const Notebook = <IModelStatic<INotebook>>sequelize.define(notebookTableName, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },

  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
})
