function main(){

    // const getChart =  async () =>{
    //     try{
    //         const response = await fetch('https://covid19.mathdro.id/api/');
    //         const responsesJSON =  await response.json();
    //         if(responsesJSON.error){
    //             console.log("koneksi error");
    //         }else{
    //             const chartCovidDunia = document.querySelector("#gambarCovid");
    //             chartCovidDunia.innerHTML = '<img src="responsesJSON.image" alt="" id="gambarCovid"></img>';
    //         }
    //     }
    //     catch(e){
    //         console.log(e);
    //     }
    // }
    // getChart();

    const getDataCovidIndo = async () =>{
        try{
            const response = await fetch('https://covid19.mathdro.id/api/countries/Indonesia/');
            const responsesJSON = await response.json();
            if(responsesJSON.error){
                console.log("koneksi error");
            }else{
                console.log(responsesJSON);
                const dataSembuh = document.querySelector("#dataSembuh");
                const dataMeninggal =  document.querySelector("#dataMeninggal");
                const dataInfeksi =  document.querySelector("#dataInfeksi");
                dataSembuh.append(responsesJSON.recovered.value);
                dataMeninggal.append(responsesJSON.deaths.value);
                dataInfeksi.append(responsesJSON.confirmed.value);
                
            }
        }
        catch(e){
            console.log(e);
        }
       
    }
   

    const getNegara = async() => {
        try{
            const response = await fetch('https://covid19.mathdro.id/api/confirmed/');
            const responsesJSON = await response.json();
            

            const lihatSemua =  responsesJSON.map( (element) => {
                return element;
            });

            if(response.error){
                console.log("cek koneksi anda ya");
            }else{
           
                console.log(lihatSemua);
                const listDataNegara = document.querySelector("#lihatNegara");
                listDataNegara.innerHTML = "";
                
                    
                    lihatSemua.forEach(dataSemua => {
                        listDataNegara.innerHTML += `
                        <tr>
                            <td class="has-text-white">${dataSemua.countryRegion}</td>
                            <td class="has-text-warning">${dataSemua.confirmed}</td>
                            <td class="has-text-danger">${dataSemua.deaths}</td>
                            <td class="has-text-primary">${dataSemua.recovered}</td>
                          </tr>
                        `;
                    });
                   // <div class="contaner" style="margin-top: 12px;">
                            //     <div class="box">
                            //         <div class="is-warning">
                            //             <h5>${dataSemua.confirmed} </h5>
                            //             <p>${dataSemua.countryRegion}</p>
                            //             <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
                            //         </div>
                            //     </div>
                            // </div>
                
            }
        }
        catch(e){
            console.log(e);
        }
    }
    getDataCovidIndo();
    getNegara();
    // const lihatRecover = (recovered) =>{
        
    //     const listBookElement = document.querySelector("#dataSembuh");
    //     listBookElement.append(responsesJSON.recovered);
    // }






    // const lihatNegara = () => {
        

    //     confirmed.forEach(confirmed => {
    //         listBookElement.innerHTML += `
    //             <div class="container" style="margin-top: 12px;">
    //                 <div class="card">
    //                     <div class="card-body">
    //                         <h5>(${confirmed.countryRegion}) ${book.title}</h5>
    //                         <p>${confirmed.confirmed}</p>
    //                         <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    //     });
    // }
}

export default main;