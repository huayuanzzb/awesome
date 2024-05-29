<template>
  <div class="flex mb-4" style="flex-direction: column;">
    <div>
      <el-input v-model="wsURL" placeholder="Please input WebSocket URL">
        <template #suffix>
          <el-button v-if="!websocket" type="primary" @click="connect"
            :loading="status == 'Connecting...'">Connect</el-button>
          <el-button v-if="websocket != undefined" type="danger" @click="close">Disconnect</el-button>
        </template>
      </el-input>

    </div>
    <!-- <div class="status">{{ status }}</div> -->
    <div class="console">
      <div v-for="(m, index) in msgList" class="msg" :data-index="index">
        <div :class="selectClass(m)">
          <el-text class="msg-content" :data-at="dayjs(m.at).format('YYYY-MM-DD hh:mm:ss.SSS')">{{ m.content }}</el-text>
        </div>
      </div>
    </div>
    <div calss="sender">
      <el-input v-model="msg" maxlength="128" show-word-limit placeholder="Input message..."
        @keyup.enter.native="onClickSend">
        <template #suffix>
          <el-button type="primary" @click="onClickSend">Send</el-button>
        </template>
      </el-input>

    </div>
  </div>
</template>


<script lang="ts" setup>
interface Message {
  type: 'S' | 'C' | 'I' | 'E',
  content: string,
  at: Date
}

import { ref, onUnmounted, onMounted } from "vue";
import { dayjs } from 'element-plus'

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
    })

  }
  msg.value = ''
};

const onSocketOpen = () => {
  status.value = "Connected"
  msgList.value.push({
    type: 'I',
    content: 'Connected',
    at: new Date()
  })
}

const selectClass = (m: Message) => {
  if (m.type == 'C') {
    return 'send'
  } else if ((m.type == 'S')) {
    return 'recv'
  } else if ((m.type == 'E')) {
    return 'erro'
  } else {
    return 'info'
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
  msgList.value.push({
    type: 'E',
    content: 'WebSocket error.',
    at: new Date()
  })
};

onMounted(() => {
  connect()
})

onUnmounted(() => {
  close()
})

const close = () => {
  if (websocket.value) {
    status.value = "Closing..."
    websocket.value.close()
    websocket.value = undefined
    status.value = "Closed."

    msgList.value.push({
      type: 'I',
      content: 'Closed',
      at: new Date()
    })
    websocket.value = undefined
  }
}

const connect = () => {
  status.value = "Connecting..."
  msgList.value.push({
    type: 'I',
    content: 'Try to connect...',
    at: new Date()
  })
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
  width: 40px;
  color: var(--ep-border-color);
  content: '[' attr(data-index)'] ';
}

.msg-content::before {
  color: var(--ep-border-color);
  content: '[' attr(data-at)'] ';
}

.send::before {
  color: var(--ep-color-primary);
  content: " [send] ";
}

.recv::before {
  color: var(--ep-color-success);
  content: " [recv] ";
}

.erro::before {
  color: var(--ep-color-danger);
  content: " [erro] ";
}

.info::before {
  color: var(--ep-color-info);
  content: " [info] ";
}
</style>