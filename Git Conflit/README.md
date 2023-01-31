# Conflit 1 
    $ git clone https://github.com/username/repo.git
    $ cd repo
    $ echo "Hello World" > README.md
    $ git add README.md
    $ git commit -m "Initial commit"
    $ git push -u origin master

## if u want to aviod the conflit write this command before u push
     
    $ git pull 

# Revert
    $ git log --oneline
         or 
    $ git log  (this will gives more details)
    
## this commit will give u the hash of the "commit"

        $ git revert hash

## and then add and push





