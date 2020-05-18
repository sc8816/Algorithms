/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
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
            }else if(pre.right==cur) {//遍历完线索解除
                pre.right = null
                printEdge(cur.left, res)
                cur = cur.right
            }
        }
    }
    printEdge(root, res);
    return res
}

function printEdge(node, ans=[]){
    if(node == null){
        return;
    }
    let revHead = rev(node);
    let p = revHead;
    while(p != null){
        let pNext = p.right;
        ans.push(p.val);
        p = pNext;
    }
    rev(revHead);
}

// reverse and return headNode
function rev(node){
    let pHead = null;
    while(node != null){
        let nodeRight = node.right;

        node.right = pHead;
        pHead = node;

        node = nodeRight;
    }
    return pHead;
}