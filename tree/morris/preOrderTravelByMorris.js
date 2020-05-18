function getPredecessor(root) {
    let pre = root
    if(root.left){
        pre = root.left
        while (pre.right!=null && pre.right!==root){ //当前未进行连接，同时不为空
            pre = pre.right
        }
    }
    return pre
}
//在某个根结点创建连线的时候打印。因为我们是顺着左边的根节点来创建连线，且创建的过程只有一次。
//打印某些自身无法创建连线的节点，也就是叶子节点。
function preOrderMorrisTravel(root) {
    let cur = root
    let res = []
    while (cur){
        if(cur.left==null){
            res.push(cur.val)
            cur = cur.right
        } else {
            let pre = getPredecessor(cur)
            if(pre.right==null){ //建立线索
                pre.right = cur
                res.push(cur.val)
                cur = cur.left
            }else if(pre.right===cur) { //遍历完线索解除
                pre.right = null
                cur = cur.right
            }
        }

    }
}