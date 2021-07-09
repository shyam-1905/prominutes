# prominutes

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
function(res){
            if(res.data.message){
                console.log(res.data.message);
            }
            else{
                var _this = this;
                _this.types.agendaname = res.data.types.agendaname;
                _this.types.id = res.data.types.id;
                _this.types.minutestype = res.data.types.minutestype;
                _this.types.priority = res.data.types.priority;
                _this.types.assigne = res.data.types.assigne;
                _this.types.assigndate = res.data.types.assigndate;
            }
        }