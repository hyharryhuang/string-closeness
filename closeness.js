exports = {closeness : closeness};

var closeness = function(A,B) {
    //closenessMatrix[i][j] holds Levenshtein distance between first i characters of A and first j characters of B
    //array (i) of arrays (j)
    var closenessMatrix = [[]];

    //construct first j array - closenessMatrix[0][j] = j by default (as distance between first j characters and empty string is j).
    var jArray = [];
    var emptyJArray = [];

    for(var j = 1; j <= B.length; j++) {
        jArray[j] = j;
        emptyJArray[j] = 0;
    }

    closenessMatrix[0] = jArray;

    //construct first i array - closenessMatrix[i][0] = i
    for(var i = 1; i <= A.length; i++) {
        closenessMatrix[i] = emptyJArray;
        closenessMatrix[i][0] = i;
    }

    for(var j = 1; j <= B.length; j++) {
        for(var i = 1; i <= A.length; i++) {
            console.log("B " + B[j-1] + " A " + A[i-1])
            if(B[j-1] == A[i-1])
                closenessMatrix[i][j] = closenessMatrix[i-1][j-1];
            else
                closenessMatrix[i][j] = Math.min(   closenessMatrix[i-1][j] + 1, //deletion
                                                    closenessMatrix[i][j-1] + 1, //insertion
                                                    closenessMatrix[i-1][j-1] + 1) //subtitution
        }
    }

    return closenessMatrix[A.length, B.length];
}

console.log(closeness("kitten", "sitting"));