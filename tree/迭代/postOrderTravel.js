// 前序遍历的过程 是 中左右。
// 将其转化成 中右左。也就是压栈的过程中优先压入左子树，在压入右子树。
// 然后将这个结果返回来，因为是倒序，所有需要从头部插入
function postOrderTravel(root) {
    let stack = [root]
    let res = []
    if(root==null) return res
    while(stack.length){
        let cur = stack.pop()
        res.unshift(cur.val)
        cur.left && stack.push(cur.left)
        cur.right && stack.push(cur.right)
    }
}


// 常规套路
//判断当前节点有没有进行访问

function postOrderTravels(root) {
    let stack = [root]
    let res = []
    if(root==null) return res
    while(stack.length){
        let cur = stack.pop()
        if(cur!=null){ //未访问
            stack.push(cur)
            stack.push(null)
            cur.right && stack.push(cur.right)
            cur.left && stack.push(cur.left)
        }else{
            res.push(stack.pop().val)
        }
    }
    return res
}