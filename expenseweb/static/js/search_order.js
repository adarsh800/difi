const searchField = document.querySelector('#searchField');
const table_output = document.querySelector('.table-output');
table_output.style.display = 'none';
const appTable = document.querySelector(".app-table");
const paginationContainer = document.querySelector(".pagination-container");
const noResults = document.querySelector(".no-results");
const tbody = document.querySelector(".table-body");


searchField.addEventListener("keyup", (e)=>{
    const searchVal = e.target.value
    

    if(searchVal.trim().length > 0){
        fetch("/orders/search-order",{
            body: JSON.stringify({searchText : searchVal}),
            method: 'POST',
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('Data:',data);
            appTable.style.display = "none";
            table_output.style.display = "block";
            console.log("data.length", data.length);
            
            if (data.length === 0) 
            {
          noResults.style.display = "block";
          table_output.style.display = "none";
        }
         else {
          noResults.style.display = "none";
          tbody.innerHTML=``;
          data.forEach((item) => {
            tbody.innerHTML += `
                <tr>
                <td>
                  <div class="d-flex px-2 py-1">
                      <div>
                          <h6 class="mb-0 text-sm text-dark">
                              ${item.date_new_order}
                          </h6>
                      </div>
                  </div>
                  </td>
                  <td>
                      <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm text-dark">
                              ${item.first_name_new_order}&nbsp;${item.second_name_new_order}
                          </h6>
                          <p class="text-xs text-secondary mb-0">${item.city_new_order}</p>
                      </div>
                  
              </td>
              <td>
                  <p class="text-xs font-weight-bold mb-0">${item.phone_number_new_order}</p>
                  <p class="text-xs text-secondary mb-0">${item.email_new_order}</p>
              </td>
              <td class="align-middle text-center text-sm">
                  <p class="text-xs text-left font-weight-bold mb-0">${item.address_new_order}</p>
                  <p class="text-xs text-left font-weight-bold mb-0">${item.address2_new_order}</p>
                  <p class="text-xs text-left font-weight-bold mb-0">
                      ${item.city_new_order},${item.state_new_order}
                  </p>
                  <p class="text-xs text-left font-weight-bold mb-0">Pincode: ${item.pincode_new_order}</p>
              </td>
              <td class="align-bottom text-center">
                  <button class="btn btn-sm btn-success btn-circle">d </button>
                  
              </td>
              <td class="align-bottom">
                  <a href="{% url 'edit-order' order_values.id %}" class="btn btn-sm btn-outline-secondary font-weight-bold text-xs"
                      data-toggle="tooltip" data-original-title="Edit user">
                      Edit
                  </a>
              </td>
              <td class="align-bottom ">
                  <a href="{% url 'delete-order' order_values.id %}" class="btn btn-sm btn-danger btn-circle text-xs" data-toggle="tooltip"
                      data-original-title="Delete user">
                      Remove
                  </a>
              </td>
            </tr>`;
          });
        }



        });
    }
    else {
    table_output.style.display = "block";
    appTable.style.display = "block";
    paginationContainer.style.display = "block";
  }
});
