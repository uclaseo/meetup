import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const fakeGroupId = '5a42f908620deb49b51ed30c';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {

    const { data } = await axios.get(this.path);
    return data.meetups;
  }
}

export {
  MeetupApi,
};
