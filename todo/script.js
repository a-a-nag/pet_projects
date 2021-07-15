const $tInput = $('#tInput');

const ENTER = 13;

const FIVE = 5;

const minusOne = -1;

let tasksState = 0;

let tArray = [];

let pageState = false;

const makeActive = function() {
  if (tArray.every(element => element.status)) {
    document.getElementById('allCheck').classList.add('active');
  } else {
    document.getElementById('allCheck').classList.remove('active');
  }
};

const escapeOutput = function(inputValue) {
  return inputValue.replace(/\u0026/gu, '&amp;')
    .replace(/\u003C/gu, '&lt;')
    .replace(/\u003E/gu, '&gt;')
    .replace(/\u0022/gu, '&quot;')
    .replace(/\u0027/gu, '&#x27;')
    .replace(/\u002F/gu, '&#x2F;');
};

const checkString = function(input) {
  let resultString = input.trim();

  if (resultString) {
    resultString = escapeOutput(resultString);

    return resultString;
  }

  return checkString();
};
const stayOnPage = function() {
  const { length: pages } = $('.page');

  let currentPage;

  for (let i = 1; i <= pages; i++) {
    if ($(`.${i}-page`).length) {
      currentPage = i;
      break;
    }
  }

  return currentPage;
};

const findPage = function() {
  if (pageState === 'create') {
    pageState = false;
    const tHolder = tArray;

    if (tasksState === minusOne) {
      tArray = tArray.filter(item => item.status);
    }

    const page = Math.ceil(tArray.length / FIVE);

    const pageforCreate = page * FIVE;

    if (tArray[1 + pageforCreate]) {
      tArray = tHolder;

      return page + 1;
    }

    tArray = tHolder;

    return page;
  } else if (pageState === 'delete') {
    pageState = false;
    const page = stayOnPage();
    const tHolder = tArray;

    if (tasksState === minusOne) {
      tArray = tArray.filter(item => item.status);
    } else {
      tArray = tArray.filter(item => !item.status);
    }

    if (tArray[(page - 1) * FIVE]) {
      tArray = tHolder;

      return page;
    }
    tArray = tHolder;

    return page - 1;
  } else if (pageState === 'check') {
    const tHolder = tArray;

    pageState = false;

    if (tasksState) {
      const page = stayOnPage();

      if (tasksState === minusOne) {
        tArray = tArray.filter(item => item.status);
      } else {
        tArray = tArray.filter(item => !item.status);
      }

      if (tArray[(page - 1) * FIVE]) {
        tArray = tHolder;

        return page;
      }
      tArray = tHolder;

      return page - 1;
    }

    return stayOnPage();
  } else if (pageState === 'tab') {
    pageState = false;

    return 1;
  } else if (pageState === 'edit') {
    pageState = false;

    return stayOnPage();
  } else if (Number(pageState) === pageState) {
    const holder = pageState;


    pageState = false;

    return holder;
  } else if (pageState === 'all') {
    pageState = false;
    if (tasksState) {
      return 1;
    }

    return stayOnPage();
  }

  return Math.ceil(tArray.length / FIVE);
};

const stylePage = function(page) {
  for (let i = 1; i <= Math.ceil(tArray.length / FIVE); i++) {
    $(`#${i}`).removeClass('active');
  }
  $(`#${page}`).addClass('active');
};

// Render the array
const renderCounter = function() {
  const checked = tArray.filter(item => !item.status);
  const { length: uncompleted } = checked;
  const completed = Number(tArray.length) - Number(uncompleted);
  const counterText = `Completed: ${completed} Uncompleted: ${uncompleted}`;


  $('#counter').html(counterText);
};

const render = tArr => {
  const currentPage = findPage();

  let strPage = '';
  let str = '';

  tArr.forEach((element, index) => {
    if (index >= (currentPage - 1) * FIVE && index < currentPage * FIVE) {
      str += `
            <div class="state3">
<li id="${element.id}"class="${element.checkStyle} 
${Math.trunc(index / FIVE) + 1}-page">
                    <input id="checkBtn" type="checkbox" 
                    ${element.status ? 'checked' : ''}/>
                    <span class="state4">${element.text}</span>
                    <button class="del-btn" id="tDelete">&#215;</button>
                </li>
                </div>`;
    }

    if (!(index % FIVE)) {
      const page = (index + FIVE) / FIVE;

      strPage
                += `<button class="page  btn btn-light" 
                id="${page}">${page}</button>`;
    }
  });

  $('#pagination').html(strPage);
  $('#tList').html(str);
  stylePage(currentPage);
  renderCounter();

  makeActive();
};


const showActive = function() {
  tasksState = 1;

  const activeTasks = tArray.filter(item => !item.status);

  render(activeTasks);
};

const showComplete = function() {
  tasksState = minusOne;

  const completeTasks = tArray.filter(item => item.status);

  // PageState = 'check';

  render(completeTasks);
};

const showAll = function() {
  tasksState = 0;
  render(tArray);
};

const checkTasksState = function() {
  if (tasksState) {
    if (tasksState === 1) {
      showActive();
    } else {
      showComplete();
    }
  } else {
    showAll();
  }
};

$('#tInput').keyup(event => {
  if (event.keyCode === ENTER) {
    if (!$tInput.val()) {
      return false;
    }
    const inputField = $tInput.val();

    const taskText = checkString(inputField);
    const txt = taskText;

    const todo = {
      checkStyle: '',
      id: Math.random(),
      status: false,
      text: txt,
    };

    tArray.push(todo);
    $tInput.val('');
    pageState = 'create';
    checkTasksState();
  }

  return 0;
});

$('#all').on('click', () => {
  pageState = 'tab';
  showAll();
});


$('#active').on('click', () => {
  pageState = 'tab';
  showActive();
});


$('#complete').on('click', () => {
  pageState = 'tab';
  showComplete();
});


$('#tAdd').on('click', () => {
  if (!$tInput.val()) {
    return false;
  }
  const inputField = $tInput.val();
  const taskText = checkString(inputField);
  const txt = taskText;
  const todo = {
    checkStyle: '',
    id: Math.random(),
    status: false,
    text: txt,
  };


  tArray.push(todo);
  $tInput.val('');
  pageState = 'create';
  checkTasksState(tArray);

  return 0;
});

// Delete the particular task
const deleteTask = function(id) {
  const dLi = tArray.findIndex(element => Number(element.id) === Number(id));

  tArray.splice(dLi, 1);
  pageState = 'delete';
  checkTasksState();
};

$(document).on('click', '#tDelete', function() {
  const id = $(this).parent()
    .attr('id');

  deleteTask(id);
});

$(document).on('click', '.page', function() {
  pageState = Number($(this).attr('id'));
  checkTasksState();
});

const checkTask = function(id) {
  const task = tArray.find(element => Number(element.id) === Number(id));

  if (task.status === false) {
    task.status = !task.status;
    task.checkStyle = 'my-check';
  } else {
    task.status = !task.status;
    task.checkStyle = '';
  }
  pageState = 'check';
  checkTasksState();
};

// Check the particular task
$(document).on('click', '#checkBtn', function() {
  const id = $(this).parent()
    .attr('id');

  checkTask(id);
});

const deleteAllCheckedHelper = function(id) {
  const index = tArray.findIndex(element => element.id === id);

  tArray.splice(index, 1);
};

const deleteAllChecked = function() {
  const arrayForDelete = tArray.filter(element => element.status);

  arrayForDelete.forEach(element => deleteAllCheckedHelper(element.id));
  checkTasksState();
};

// Delete all checked tasks
$('#delCheck').on('click', () => {
  deleteAllChecked();
});

// Delete all tasks
$('#delAll').on('click', () => {
  tArray.length = 0;
  checkTasksState();
});

const saveTask = function() {
  const test = $('.ch-task').val();

  const task = $('.ch-task').parent()
    .attr('id');

  const index = tArray.findIndex(item => {
    if (Number(item.id) === Number(task)) {
      return true;
    }

    return 0;
  });

  const taskText = checkString(test);

  tArray[index].text = taskText;

  pageState = 'edit';
  render(tArray);
};

// Change the particular task by double click on it
const acceptChanges = function(currentSpan, spanValue) {
  $(currentSpan).replaceWith(`<input 
    class="ch-task" type="text" value="${spanValue}" autofocus></input>`);

  $('.ch-task').trigger('focus');

  $('.ch-task').on('blur', () => {
    saveTask();
  });

  $('.ch-task').keyup(event => {
    if (event.keyCode === ENTER) {
      saveTask();
    }
  });
};

$('#tList').on('dblclick', 'span', function() {
  const currentSpan = $(this);

  const spanValue = $(this).text();

  acceptChanges(currentSpan, spanValue);
});

$('#all').on('click', () => {
  document.getElementById('all').classList.add('state2');
  document.getElementById('active').classList.remove('state2');
  document.getElementById('complete').classList.remove('state2');
});
$('#active').on('click', () => {
  document.getElementById('active').classList.add('state2');
  document.getElementById('all').classList.remove('state2');
  document.getElementById('complete').classList.remove('state2');
  document.getElementById('all').classList.remove('btn-success');
});
$('#complete').on('click', () => {
  document.getElementById('complete').classList.add('state2');
  document.getElementById('all').classList.remove('state2');
  document.getElementById('active').classList.remove('state2');
  document.getElementById('all').classList.remove('btn-success');
});

let chtArray;

$('#allCheck').on('click', () => {
  chtArray = tArray.filter(item => item.status);

  if (chtArray.length === tArray.length) {
    tArray.forEach(element => {
      element.status = false;
      document.getElementById('allCheck').classList.remove('active');
      element.checkStyle = '';
      pageState = 'all';
      checkTasksState();
    });
  } else {
    tArray.forEach(element => {
      element.status = true;
      document.getElementById('allCheck').classList.add('active');
      element.checkStyle = 'my-check';
      pageState = 'all';
      checkTasksState();
    });
  }
});
