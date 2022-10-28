import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://63594f34ff3d7bddb99f00ae.mockapi.io/api/v1',
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
            query: newContact => ({
                url: '/contacts',
                method: 'POST',
                body: {
                    name: newContact.name,
                    phone: newContact.phone,
                },
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});

export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactsApi;


