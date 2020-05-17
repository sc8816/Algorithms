var levelOrderBottom = function(root) {
    let res = []
    let quenue = [root]
    while(quenue.length){
        let temp = []
        for(let i=0; i<quenue.length; i++){
            let cur = quenue[i]
            console.log(cur.val)
            cur.left && temp.push(cur.left)
            cur.right && temp.push(cur.right)
        }
        quenue = temp
    }
};