/*
 * action 类型
 */

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const LOOK_DEPARTMEMBER_MEMBER = 'LOOK_DEPARTMEMBER_MEMBER';

export const SEARCH_NOTICE = 'SEARCH_NOTICE';
export const LOOK_NOTICE_DETAIL = 'LOOK_NOTICE_DETAIL';


// export const LOGIN = 'LOGIN';
// export const LOGIN_OUT = 'LOGIN_OUT';

// export const ADD_CONTACT = 'ADD_CONTACT';
// export const PUBLISH_NOTICE = 'PUBLISH_NOTICE';


/*
 * action 创建函数
 */
 
export function changePage(id) {
  return { type: CHANGE_PAGE,id};
}

export function lookDepartmemberMember(id) {
  return { type: LOOK_DEPARTMEMBER_MEMBER,id};
}

export function searchNotice(text) {
  return { type: SEARCH_NOTICE,text};
}

export function lookNoticeDetail(id) {
  return { type: LOOK_NOTICE_DETAIL,id};
}