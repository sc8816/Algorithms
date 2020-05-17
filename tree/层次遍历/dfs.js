var levelOrderBottom = function(root) {
    let res = []
    let dfs = (root, level)=>{
        if(root!=null){
            dfs(root.left, level+1)
            res[level] = res[level] ? [...res[level], root.val] :[root.val]
            dfs(root.right, level+1)
        }
    }
    dfs(root, 0)
    return res
};