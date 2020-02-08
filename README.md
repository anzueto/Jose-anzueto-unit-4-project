# Jose-anzueto-unit-4-project
***
### User Stories
as a user I want to make reminders for the week
I should be able to alter the reminder
I should be able to delete on complete
I want the reminders displayed as a list
***

## mock
Used adobe Xd to mock something quick 
[Notes App Mock](https://xd.adobe.com/view/2505a03b-d8f2-4f0e-70e5-1251ccf6e5f7-5334/#access_token=eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE1ODExODc0NjkzMjJfMDE4NTA0NTYtNThhNC00OGQ5LThiZTItNmFjMjhmY2MxZGU3X3VlMSIsImNsaWVudF9pZCI6IkNvbWV0V2ViMSIsInVzZXJfaWQiOiI4MkRENDcwMzU3QkFGNjZGN0YwMDAxMDFAQWRvYmVJRCIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJhcyI6Imltcy1uYTEiLCJmZyI6IlVGT0tBQVRLWFBNNUlIVU9DT0FMWU9RQVZFPT09PT09Iiwic2lkIjoiMTU4MTE4NzQ2OTMyMl82Y2I0NTQzMy0zNWFjLTQ1NWEtOTE0ZS04YTVhMzBlNDMwYzJfdWUxIiwibW9pIjoiZDIzNjY3MTUiLCJjIjoiQzNFQmpRSW1yL3FKUmFoRnlEMmVUUT09IiwiZXhwaXJlc19pbiI6Ijg2NDAwMDAwIiwiY3JlYXRlZF9hdCI6IjE1ODExODc0NjkzMjIiLCJzY29wZSI6IiJ9.KBVrJ91CBqWuM6sHrRTPg4yQIWZl8HBGHRMgN96Z37tnUD20AKteog9Kk5VzRm3WGmhdJ0sWQjegJ1AhbE2MrDWAZ_sS0adCABeE4oHcvp0PVkCFNZ6C9HRD_W92t6pOA4-phk46mhny05Sp8f0ifNwmMbhtWzCd_bMdXub8Inl0-vpYBUE_dzx4j4dVkU4Ps3NNmhTAF4DbdBxO4RChwtlWUiD6Dt_vZTLeUhiJuVQ1SGMEQLlpdirFdPxfQp1GRrFiDNmQJgWx-vcjDuE2WG9snqPqGASOzKPRnJDlePrXVcwQZv-Z3cDJ1RfCQDdTT4_YluGREinMvBWRdtq1lw&token_type=bearer&expires_in=86399993)
 ***
## Journey
1. issues with git hub 
I coudlnt push changes

2. In the initiation process I forgot to include --skip-git --skip-active-storage which I thought I was only supposed to do it when we worked in the class repo.

3. I had to start over and created a new database

4. tested all routes in postman, all of them worked - Suceess

5. had a issue after submiting the form
the issue was clearing after submussion. I had object instead of array
`notes: {jsonedNote, ...this.state.notes} - incorrect
notes: [jsonedNote, ...this.state.notes] - correct`
 ***
## Futuge goals
1. use Bulma
2. make two columns and see completed reminders
3. make it responsive
4. Share with users