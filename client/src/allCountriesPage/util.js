export function sortByConfirmedCases(inputData,asc) { 
    inputData.sort(function(a,b) {
        let x = a.latest_data.confirmed;
        let y = b.latest_data.confirmed;
        if (asc){
            return ((x > y) ? 1 : ((x < y) ? -1 : 0)) 
        } else {
            return ((y > x) ? 1 : ((y < x) ? -1 : 0))
        }
    })
    return inputData;
}

export function top20Cases(inputData) { 
    var outputData = [];
    for (var i=0; i<20; i++) { 
        outputData.push(inputData[i])
    }
    return outputData;
}