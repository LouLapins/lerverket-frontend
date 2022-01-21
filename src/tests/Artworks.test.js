import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme'
import { Artworks, ITEMS } from '../pages/Artworks'
import { act } from 'react-dom/test-utils'
import wait from 'waait'


Enzyme.configure({ adapter: new Adapter() });

const mockArtworksData = {
    request: {
        query: ITEMS,
    },
    result: {
        data: {
            items: [{
                "id": "4",
                "attributes": {
                    "title": "Lystra",
                    "artist": "Alvina Jakobsson",
                    "year": 2020,
                    "coverImage": {
                        "data": {
                            "id": "22",
                            "attributes": {
                                "alternativeText": "lystra1.jpg",
                                "formats": {
                                    "thumbnail": {
                                        "name": "thumbnail_lystra1.jpg",
                                        "hash": "thumbnail_lystra1_ec6c6e94b8",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "width": 195,
                                        "height": 156,
                                        "size": 4.63,
                                        "path": null,
                                        "url": "/uploads/thumbnail_lystra1_ec6c6e94b8.jpg"
                                    },
                                    "small": {
                                        "name": "small_lystra1.jpg",
                                        "hash": "small_lystra1_ec6c6e94b8",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "width": 500,
                                        "height": 400,
                                        "size": 17.03,
                                        "path": null,
                                        "url": "/uploads/small_lystra1_ec6c6e94b8.jpg"
                                    }
                                }
                            }
                        }
                    }
                }
            }]
        }
    }
}

it('renders artworks data', async () => {
    let wrapper;
    await act(async () => {
        wrapper = mount(
            <MockedProvider addTypename={false} mocks={mockArtworksData}>
                <Artworks></Artworks>
            </MockedProvider>
        )
    })

    await act(() => wait (0))
    wrapper.update()
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('.item-title')).toHaveText(
        'Lystra, Alvina Jakobsson, 2020'
    )
})