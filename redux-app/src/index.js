import {createStore} from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'REF':
      return state = 0;
    default:
      return state;
  }
};

const inc = ()=> ({type:'INC'});
const dec = ()=> ({type:'DEC'});
const ref = ()=> ({type:'REF'});

const store = createStore(reducer);


document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc())
});
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec())
});
document.getElementById('ref').addEventListener('click', () => {
  store.dispatch(ref())
});

const update = () => {
  document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);