console.log(`jQuery - Pobierz dane po kliknięciu przycisku`);

$(document).ready(function()    {

    $('#get-data').click(function() {   //Wywołanie fukcji i pobranie button
        // console.log('click #get-data'); //Check czy click działa

//         //WARIANT 1 - dane pobierane za pomocą funkcji .GET

//         //Pobieranie posta z API
//         $.get('https://akademia108.pl/api/ajax/get-post.php')
//             .done(function(data)    {   //Umożliwienie pobrania danych
//                 console.log(data); //Wyświetlenie danych w consoli - powinien pobierać się obiekt z postem

//                 let pId = $('<p></p>').text(`Post ID: ${data.id}`); //Tworzenie paragrafów i dodanie do strony
//                 let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
//                 let pTitle = $('<p></p>').text(`Title: ${data.title}`);
//                 let pBody = $('<p></p>').text(`Body: ${data.body}`);
//                 let hr = $('<hr />');   //Obiekt horyzontalnej linii

//                 let jqBody = $('body');

//                 jqBody.append(pId);
//                 jqBody.append(pUserId);
//                 jqBody.append(pTitle);
//                 jqBody.append(pBody);
//                 jqBody.append(hr);  //Wyświetlają się dane na stronie, ID zmienia się 


//             })
//             .fail(function(error)   {   //Funkcja obsługi błędów, gdyby były errors to żeby wyrzuciło do consoli. console.error - żeby było wszysto na czerwono.
//                 console.log(error);
//             })  
//     });
//     // console.log(`jQuery.ready`); --> biblioteka jQuery działa, tzn. że jest podpięta
// });


// WARIANT 1 - dane pobierane za pomocą .getJSON

$.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data)    {   //Umożliwienie pobrania danych
                console.log(data); //Wyświetlenie danych w consoli - powinien pobierać się obiekt z postem

                let pId = $('<p></p>').text(`Post ID: ${data.id}`); //Tworzenie paragrafów i dodanie do strony
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr />');   //Obiekt horyzontalnej linii

                let jqBody = $('body');

                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);  //Wyświetlają się dane na stronie, ID zmienia się

            })
            .fail(function(error)   {   //Funkcja obsługi błędów, gdyby były error to żeby wyrzuciło do consoli. console.error - żeby było wszysto na czerwono.
                console.log(error);
            }); 
    });
    // console.log(`jQuery.ready`); --> biblioteka jQuery działa, tzn. że jest podpięta
});

// Obie metody w powyższym przypadku są prawie identyczne. Różnice w bibliotece jQuery są takie, że za pomocą:
// - metody getJSON można pobierać tylko i wyłącznie dane, które są w formacie JSON'a i pobierane są te dane za pomocą protokołu get http.
// - metoda get, dane są pobierane za pomocą też protokołu get http, ale tutaj można pobierać dane w innym formacie, a w poprzedniej metodzie jest ograniczenie tylko do JSON'a. 