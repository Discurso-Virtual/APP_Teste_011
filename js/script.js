/*MENU--SIDEBAR*/



document.getElementById('colapse-menu').onclick = function changeContent() {

    if(document.getElementById('sidebar').classList.contains('colapsed')){
        document.getElementById('sidebar').classList.remove('colapsed');

        document.getElementById('main').classList.replace('col-lg-12','col-lg-10');
        document.getElementById('paraRemover').classList.remove('col-lg-1');
    }else{
        document.getElementById('sidebar').classList.add('colapsed');
        document.getElementById('main').classList.replace('col-lg-10','col-lg-12');
        document.getElementById('linha').insertAdjacentHTML("afterbegin","<div class='col-lg-1' id='paraRemover'> </div>");
    }
    
 
 }

 /*MODAL */
   
 function openModal(id,current,operacao){
    $('#loadModal').load('http://192.168.1.20/teste/common/modal.php',{id:id,current:current,operacao:operacao})
    }
   
/*FOOOTER*/

function doDate(){

    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    $('#time').html (dateTime);

};
setInterval(doDate, 1000);



function fetchInfo() {
    
    var selectBox = document.getElementById("fiscCriar");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    window.location.href = 'http://192.168.1.20/teste/autofill.php?id='+selectedValue;

};


    $(document).ready(function(){
        $("#codCliente").keyup( function() {
          var id = $(this).val();
          if(id!=''){
              $.ajax({
                  url:'http://192.168.1.20/teste/searchInput.php',
                  method:'post',
                  data:{query:id},
                  success:function(response){
                      $('#show-list').html(response);
                  }
              });
          }
          else{
              $('#show-list').html('');
          }
        });
        $(document).on('click','#selection', function(){
            $('#codCliente').val($(this).text());
            $('#show-list').html('');
            var id = $('#codCliente').val();
            if(id!=''){
                $.ajax({
                    url:'http://192.168.1.20/teste/fillNomeCliente.php',
                    method:'post',
                    data:{query:id},
                    success:function(response){
                        $('#nomeCli').val(response);
                    }
                });
            }
            else{
                $('#nomeCli').html('');
            }
        });
        
    });







var i=document.getElementById(`idLin[]`).value;
var j =0;

function novaLinha(){
        var table = document.getElementById("linTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        i++;
        j++;

        cell1.innerHTML = "<input class='form-control' type='text' name='idLin[]' id='idLin[]' form='form_docFiscais' value='"+ i +"' readonly></input>";
        cell2.innerHTML = "<input class='form-control' type='text' name='idCab[]' id='idCab[]' form='form_docFiscais' value='"+document.getElementById(`idDocFisc`).value+"' readonly></input>";
        cell3.innerHTML = "<input class='form-control' type='text' name='refProdLin[]' id='refProdLin["+j+"]' form='form_docFiscais' onblur='searchProd(value)'</input>";
        cell4.innerHTML = "<input class='form-control' type='text' name='descProdLin[]' id='descProdLin["+j+"]' form='form_docFiscais'></input>";
        cell5.innerHTML = "<input class='form-control' type='text' name='Quantidade[]' id='Quantidade[]' form='form_docFiscais'></input>";
        cell6.innerHTML = "<input class='form-control' type='text' name='precUni[]' id='precUni["+j+"]' form='form_docFiscais'></input>";
        cell7.innerHTML = "<input class='form-control' type='text' name='precTot[]' id='precTot[]' form='form_docFiscais'></input>";
};

   



 function searchProd(ref){
     
    if(ref!=''){
        $.ajax({
            url:'http://192.168.1.20/teste/searchProd.php',
            method:'post',
            data:{query:ref},
            success:function(data){
                console.log(data);
                document.getElementById('descProdLin['+j+']').value=data[1];
                document.getElementById('precUni['+j+']').value=data[2];
            }
        });
    }
  };