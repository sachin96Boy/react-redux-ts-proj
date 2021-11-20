import { ActionType } from "../constants/constants";

interface SEARCHREPOSITORIES {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SEARCHREPOSITORIESSUCCESS {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SEARCHREPOSITORIESERROR {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SEARCHREPOSITORIES
  | SEARCHREPOSITORIESSUCCESS
  | SEARCHREPOSITORIESERROR;
