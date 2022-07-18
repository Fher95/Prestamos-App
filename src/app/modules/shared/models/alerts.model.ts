export enum AlertTypes {
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning'
}

export interface AlertModel {
    mensaje: string,
    tipo: AlertTypes
}