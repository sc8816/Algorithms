let res = []
function InOrderTravel(root) {
    if(root){
        InOrderTravel(root.left)
        res.push(root.val)
        InOrderTravel(root.right)
    }
}