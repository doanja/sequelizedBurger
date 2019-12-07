$('#submit-burger-button').click(() => {
  console.log('clicked');
  if (!$('#burger-name-input').val()) {
    alert('You must enter a burger name!');
  } else {
    postBurger();
  }
});

// function to send a post request using axios to create a new burger
const postBurger = () => {
  // send put request to /api/customer
  axios.post(`/api/burgers/`, { burger_name: $('#burger-name-input').val() }).then(res => {
    location.reload();
  }),
    err => {
      console.log(err);
    };
};

$('#submit-customer-button').click(() => {
  console.log('clicked');
  if (!$('#customer-name-input').val()) {
    alert('You must enter a customer name!');
  } else {
    postCustomer();
  }
});

// function to send a post request using axios to create a new customer
const postCustomer = () => {
  // send put request to /api/customer
  axios.post(`/api/customer/`, { customer_name: $('#customer-name-input').val() }).then(res => {
    location.reload();
  }),
    err => {
      console.log(err);
    };
};

// click listener for devour buttons
$('.devour-button').click(function() {
  const id = $(this).attr('id');
  console.log('id :', id);
  const customer_id = $('#customer').val();
  console.log('customer_id', customer_id);
  clickDevour(id, customer_id);
});

// function to send a put request using axios to update burger
const clickDevour = (id, customer_id) => {
  // send put request to /api/burgers/id
  axios.put(`/api/burgers/${id}/${customer_id}`).then(res => {
    console.log('Update success.');
    location.reload();
  }),
    err => {
      console.log(err);
    };
};

// click listener for delete buttons for burgers
$('.delete-button').click(function() {
  const data = $(this).attr('data');
  console.log(data);
  clickDelete(data, 0);
});

// function to send a delete request using axios
const clickDelete = (data, num) => {
  // send put request to /api/burgers/id
  axios.delete(`/api/burgers/${data}`).then(res => {
    console.log('Delete success.');
    location.reload();
  }),
    err => {
      console.log(err);
    };
};
