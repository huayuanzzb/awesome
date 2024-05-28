<template>
  <div class="flex mb-4">
    <el-input v-model="wsURL" placeholder="Please input WebSocket URL"></el-input>
    <el-button type="primary" @click="connect" :disabled="websocket != undefined">Connect</el-button>
    <el-button type="danger" @click="close" :disabled="!websocket">Disconnect</el-button>
  </div>
  <div>
    <!-- <div class="status">{{ status }}</div> -->
    <div class="console">
      <div v-for="m in msgList" class="msg" :class="selectClass(m)">
        <!-- <el-text>{{ m.at }}</el-text> -->
        <el-text>{{ m.content }}</el-text>
      </div>
    </div>
    <div calss="sender">
      <el-input v-model="msg" placeholder="Input message...">
        <template #suffix>
          <el-button type="primary" @click="onClickSend">Send</el-button>
        </template>
      </el-input>

    </div>
  </div>
</template>


<script lang="ts" setup>
interface Message {
  type: 'S' | 'C',
  content: string,
  at: Date
}

import { ref, reactive, onMounted } from "vue";
const wsURL = ref("wss://echo.websocket.org/");
const websocket = ref<WebSocket>();
const status = ref<string>();
const msgList = ref<Message[]>([]);
const msg = ref<string>();

const onClickSend = () => {
  if (msg.value) {
    websocket.value?.send(msg.value)
    msgList.value.push({
      type: 'C',
      content: msg.value,
      at: new Date()
    }
    )

  }
  msg.value = ''
};

const onSocketOpen = () => {
  status.value = "Connected"
}

const selectClass = (m: Message) => {
  if (m.type == 'C') {
    return 'send'
  } else {
    return 'recv'
  }
}

const onSocketMessage = (event: MessageEvent) => {
  msgList.value.push({
    type: 'S',
    content: event.data,
    at: new Date()
  }
  )
};

const onSockerError = (event: any) => {
  close()
};

onMounted(() => {
  connect()
})

const close = () => {
  if (websocket.value) {
    status.value = "Closing..."
    websocket.value.close()
    websocket.value = undefined
    status.value = "Closed."
  }
}

const connect = () => {
  status.value = "Connecting..."
  websocket.value = new WebSocket(wsURL.value)
  websocket.value.onopen = onSocketOpen;
  websocket.value.onmessage = onSocketMessage;
  websocket.value.onerror = onSockerError;
}

</script>

<style scoped>
.console {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.msg {
  border-bottom: 1px dashed #343233;
  display: flex;
  font-family: monospace;
}

.msg::before {
  display: flex;
  padding-right: .5rem;
}

.send {
  color: lightgrey;
}

.send::before {
  color: var(--ep-color-primary);
  content: "[send]";
}

.recv {
  color: var(--ep-color-info);
}

.recv::before {
  color: var(--ep-color-danger);
  content: "[recv]";
}
</style>