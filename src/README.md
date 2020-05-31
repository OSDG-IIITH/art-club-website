# Source
Will contain the backend and front end pieces
-------------
# art-club-website
Art Club website at IIIT-H <br/>

I have kept all the project files in ./src directory <br/>
project name: webpage <br/>
app name : webapp <br/>

to get started
```console
foo@bar:~/art-club-website/src$ make
```
this installs requirements and takes you to virtual env
<br>
<br>
```console
foo@bar:~/art-club-website/src$ python3 ./mange.py runserver
```
gets the server running on localhost ie.  http://127.0.0.1:8000/<br>
<br>
#### Advanced:
For only activating virtual env:
```console
foo@bar:~/art-club-website/src$ make activate
```
for only installing required packages:

```console
foo@bar:~/art-club-website/src$ make install
```
for exiting virtual env:
`deactivate`
<br>
for changing the server's port
```console
foo@bar:~/art-club-website/src$ python3 ./mange.py runserver <port number>
```
If you want to change the server’s IP, pass it along with the port
<br> (make sure to add it in ALLOWED_HOSTS in /art-club-website/src/webpage/settings.py)
```console
foo@bar:~/art-club-website/src$ python3 ./mange.py runserver <ip addrs>:<port number>
```
