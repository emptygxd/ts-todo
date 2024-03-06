export const TITLE_INPUT = <HTMLInputElement>document.getElementById('title');
export const DETAIL_INPUT = <HTMLInputElement>document.getElementById('detail');
export const DEADLINE_INPUT = <HTMLInputElement>(
  document.getElementById('deadline')
);
export const TITLE_ERROR = document.getElementById('titleError');
export const DETAIL_ERROR = document.getElementById('detailError');
export const DEADLINE_ERROR = document.getElementById('deadlineError');
export const INDEX_PAGE = document.getElementById('index__wrapper');
export const MESSAGE: string = 'У вас пока нет дел.';
export const INDEX: string = 'index';

export type ObjT = {
  title: string;
  description: string;
  deadline: string;
  priority: string;
  id: number;
};
export type ArraysT = Array<ObjT>;
