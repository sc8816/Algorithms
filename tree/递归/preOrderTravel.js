//中左右
function preOrderTravel(root) {
    if(root){
        res.push(root.val)
        preOrderTravel(root.left)
        preOrderTravel(root.right)
    }
}