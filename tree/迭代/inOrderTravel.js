
//优先把左节点统一放入栈中，根据栈后进先出，最先出栈的是最左的节点，然后判断当前出栈的节点有没有右孩子，
// 有右孩子再执行一遍中序操作
function InOrderTravel(root) {
    let res = []
    if(root==null) return res
    let stack=[]
    while (stack.length||root){
        while(root){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        res.push(root.val)
        if(root.right){
            root = root.right
        }
    }
}

function InOrderTravels(root) {
    if(rooot==null) return []
    let res = []
    let stack = [root]
    while(stack.length){
        let cur = stack.pop()
        if(cur){
            cur.right && stack.push(cur.right)
            stack.push(cur) //在左结点之前重新插入该结点，以便在左结点之后处理（访问值）
            stack.push(null) //空结点随之入栈，标识已经访问过，但还没有被处理（还可以进行额外操作）
            cur.left && stack.push(cur.left)
        }else{
            res.push(stack.pop().val)
        }
    }
    return res
}