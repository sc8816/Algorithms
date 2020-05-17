//栈后进先出， 先右后左
function preOrderTravel(root) {
    let res = []
    if(!root) return res
    let stack = [root]
    while(stack.length){
        root = stack.pop()
        res.push(root.val)
        root.right && stack.push(root.right)
        root.left && stack.push(root.left)
    }
    return res
}

function preOrderTravels(root) {
    let res = []
    if(!root) return res
    let stack = [root]
    while(stack.length){
       let cur = stack.pop()
        if(cur){
            cur.right && stack.push(cur.right)
            cur.left && stack.push(cur.left)
            stack.push(cur)
            stack.push(null)
        }else {
            res.push(stack.pop().val)
        }
    }
    return res
}