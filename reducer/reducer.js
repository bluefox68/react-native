var pageVisibilityFilter = function(state==HOME,action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

var backBtnVisibilityFilter = function(state==false,action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

var setBackBtn = function(state==false,action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

var setData = function(state==false,action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const app = combineReducers({
  pageVisibilityFilter:pageVisibilityFilter,
  backBtnVisibilityFilter:backBtnVisibilityFilter,
  backBtn:setBackBtn,
  data:setData
});

export default app;


