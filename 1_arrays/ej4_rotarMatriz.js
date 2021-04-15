const rotarMatriz = (X) => {
    
    const getIndexes = (r,c) =>  {
        const complement = (i) => {
            return X.length - 1 - i
        };
    
        // [row, column]
        const UL = [r,c];
        const UR = [c, complement(r)];
        const BR = [complement(r), complement(c)];
        const BL = [complement(c), r];

        return {
            UL,
            UR,
            BR, 
            BL
        }
    };

    const getMaxR = () => Math.floor(X.length/2) - 1;
    const getMaxC = (r) => X.length - 1 -1 - r;

    for (r = 0; r <= getMaxR (); r++) {
        for(c = r; c <= getMaxC(r); c++ )  {

            const {UL, UR, BR, BL} = getIndexes(r,c);

            const xUL = X[UL[0]][UL[1]] // UL
            const xUR = X[UR[0]][UR[1]] // UR
            const xBR = X[BR[0]][BR[1]] // BR
            const xBL = X[BL[0]][BL[1]] // BL

            X[UL[0]][UL[1]] = xBL; // UL = BL
            X[UR[0]][UR[1]] = xUL; // UR = UL
            X[BR[0]][BR[1]] = xUR; // BR = UR
            X[BL[0]][BL[1]] = xBR; // BL = BR
        }
    }

    
}

const X1 = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
]
rotarMatriz(X1);

const X2 = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15]
]

rotarMatriz(X2);

console.log(X2);