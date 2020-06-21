venv: venv/bin/activate

install1: requirements.txt
	( \
	source path/to/virtualenv/bin/activate; \
	pip3 install -r requirements.txt; \
	)

install: requirements.txt
	#test -d venv || virtualenv venv	
	. ./venv/bin/activate; pip3 install -Ur requirements.txt
	touch venv/bin/activate

test: venv
	. venv/bin/activate; nosetests ./

clean:
	rm -rf venv
	find -iname "*.pyc" -delete
