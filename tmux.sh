 
DIR=${pwd}
SESSIONNAME=NWtoken
MEMNONIC=$(grep MEMNONIC .env | cut -d '=' -f 2-)
BLOCKSPEED=0
GASLIMIT=8000000
tmux new-session -s $SESSIONNAME \; \
	send-keys 'vi ${DIR}' C-m \; \
	split-window -v \; \
	split-window -v \; \
	send-keys "cd web && npm run serve" C-m \; \
	split-window -h \; \
	send-keys "ganache-cli -b ${BLOCKSPEED}  --gasLimit=${GASLIMIT}  -m ${MEMNONIC}" C-m \; \


