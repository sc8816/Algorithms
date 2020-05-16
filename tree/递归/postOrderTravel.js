//左右中
let res = []
function postOrderTravel(root) {
    if(root){
        postOrderTravel(root.left)
        postOrderTravel(root.right)
        res.push(root.val)
    }
}