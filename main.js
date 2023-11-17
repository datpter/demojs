
// var postApi = 'http://localhost:3000/courses'

// var ulElement = document.getElementById('list-courses')
// function start (){
//     getcourses()
//     handleCreateFrom()
  



// }
// start()
// function createCourses(data,callback){
//     var option ={
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           body: JSON.stringify(data),
//     }
//     fetch(postApi,option)
//     .then(function(response){
//         return response.json()
//     })
//     .then(callback)

// }
// function deleteCourses(id){
//     var option ={
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
     
//     }
//     fetch(postApi+'/'+id,option)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(){
//         var result = document.querySelector('.courses-item-'+id)
//         result.classList.remove('courses-item-'+id)
//     })

// }
// function getcourses(){
//     fetch(postApi)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//       var html =  data.map(function(element){
//             return `<li class"courses-item-${element.id}">
//             <h2> ${element.name}</h2>
//             <h3>${element.description}</h3> 
            
//             <button onclick="deleteCourses(${element.id})">Xóa</button>

//            <div>

//             <div>
//             <label >Updata Name</label>
//             <input type="text" id="name1">
//         </div>

//         <div>
//             <label > Updata Description</label>
//             <input type="text" id="description1">
//         </div>

//         <div>
//         <button id="createBtn1">Create</button>
//     </div>

//     </div>

//             </li>`
//         })
//         ulElement.innerHTML=html.join('')
//     })
// }

// function handleUpdatacourses(){
//     var buttonElement1 = document.getElementById('createBtn1')
//     buttonElement1.onclick = function () {
//         var nameElement = document.getElementById('name1').value
//         var DescriptionElment = document.getElementById('description1').value
//         console.log(nameElement);
//     }
// }  
// handleUpdatacourses()


// function handleCreateFrom(){
//     var buttonElement = document.getElementById('createBtn')
//     buttonElement.onclick = function(){
//         var nameElement = document.getElementById('name').value
//         var DescriptionElment = document.getElementById('description').value
//        var fromdata = {
//         name : nameElement,
//         description:DescriptionElment
        
//        }
//        createCourses(fromdata,function(){
 
//        })

//     }

//     

function Validator (option){
   var fromElement = document.querySelector(option.from)

  if(fromElement){
    option.rules.forEach(function(rule){
        var inputElement = fromElement.querySelector(rule.selector)
        var errorElement = inputElement.parentElement.querySelector('.form-message')
      if(inputElement){
        inputElement.onblur= function(){
            var errorMeesage = rule.test(inputElement.value)
            if(inputElement){
                errorElement.innerHTML=errorMeesage
                inputElement.parentElement.classList.add('invalid')
            }else{
                errorElement.innerHTML=''
                inputElement.parentElement.classList.remove('invalid')

            }
        
        }
        inputElement.oninput= function(){
            errorElement.innerHTML=''
            inputElement.parentElement.classList.remove('invalid')
        }
      }
    })
   
  }

}
Validator.isRequired= function(selector){
    return{
        selector:selector,
        test: function(value){
            return value.trim() ? undefined : 'Vui lòng bạn nhập tên'
        }

    } 

}
Validator.isEmail = function(selector){
    return{
        selector:selector,
        test: function(value){
            var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng email'

        }

    } 
    
}
Validator.minlength = function(selector ,min){
    return{
        selector:selector,
        test: function(value){
           if(value.length>=min){
            return undefined

           }else{
            return `nhập đúng ${min} ký tự `
           }
        }

    } 
    
}