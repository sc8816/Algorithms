//mirror遍历
function getPredecessor(root) {
    let pre = root
    if(root.left){
        pre = root.left
        while (pre.right!=null && pre.right!=root){ //当前未进行连接，同时不为空
            pre = pre.right
        }
    }
    return pre
}
//模板
function morrisTravel(root) {
    let cur = root
    let res = []
    while (cur){
        if(cur.left==null){
            cur = cur.right
        } else {
            let pre = getPredecessor(cur)
            if(pre.right==null){ //建立线索
                pre.right = cur
                cur = cur.left
            }else if(pre.right===cur) {//遍历完线索解除
                pre.right = null
                cur = cur.right
            }
        }

    }
}